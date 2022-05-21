import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

process.env.JEST = true;

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-calendars', () => {
  return {
    Calendar: () => null,
    LocalConfig: () => null,
  };
});
