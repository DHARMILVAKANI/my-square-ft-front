class LocalStorageService {
  // Save data to localStorage
  static setItem(key, value) {
    try {
      const data = JSON.stringify(value); // Ensure data is stringified before saving
      localStorage.setItem(key, data);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  // Get data from localStorage
  static getItem(key) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data); // Parse the stored JSON string back into an object
      }
      return null; // Return null if the key does not exist
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  }

  // Remove an item from localStorage
  static removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }

  // Clear all items from localStorage
  static clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }
}

export default LocalStorageService;
