import { Platform, Dimensions, PixelRatio } from 'react-native';

// Constants for easier reference
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IOS = Platform.OS === 'ios';

// Helper class
class Responsive {
  // Get current platform
  getPlatform = () => {
    const platform = Platform.select({
      ios: 'ios',
      android: 'android',
      web: 'web',
    });
    return platform;
  };

  // Get screen dimensions
  getScreenDimensions = () => ({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  });

  // Calculate a responsive font size based on screen width
  // You can adjust the base font size and multiplier as needed
  getResponsiveFontSize = (baseFontSize = 16, multiplier = 0.05) => {
    return baseFontSize + SCREEN_WIDTH * multiplier; 
  };

  // Calculate a responsive height based on screen height
  getResponsiveHeight = (percentage: any) => {
    return SCREEN_HEIGHT * (percentage / 100);
  };

  // Calculate a responsive width based on screen width
  getResponsiveWidth = (percentage: any) => {
    return SCREEN_WIDTH * (percentage / 100);
  };

  //  Get Pixel Ratio 
  getPixelRatio = () => {
    return PixelRatio.get(); 
  };
}

export default new Responsive();