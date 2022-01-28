import AsyncStorage from "@react-native-community/async-storage";

export default class localStorage {
    //takes in an array of keys and returns an array of [key,value] pairs
    static async getValues(array) {
        try {
            let value = await AsyncStorage.multiGet(array);
            return value;
        } catch (error) {
            return false;
        }
    }

    // takes in an array of [key,value] pairs
    static async storeValues(array) {
        try {
            await AsyncStorage.multiSet(array);
        } catch (error) {
            return false;
        }
    }

    static async clearLocalStorage() {
        try {
            await AsyncStorage.clear();
            return true;
        } catch (error) {
            return false;
        }
    }
}
