
import { router } from 'expo-router';
import { render, screen, fireEvent } from '@testing-library/react-native';

import HomeScreen from '../../app/index'; 
import ProfileScreen from '../../app/Profile'; 

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(), // Mock the `push` function
  },
}));

describe('HomeScreen', () => {
  it('navigates to Profile screen when the "Profile" button is pressed', () => {
    render(<HomeScreen />);

    const profileButton = screen.getByText('Profile');
    
    fireEvent.press(profileButton);

    // Assert that the router's `push` method was called with "/Profile"
    expect(router.push).toHaveBeenCalledWith('/Profile');
  });
});
