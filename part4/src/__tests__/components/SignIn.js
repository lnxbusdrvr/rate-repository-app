import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();

      const formikMock = {
        values: { username: 'kalle', password: 'password' },
        handleChange: jest.fn().mockImplementation((field) => (value) => {
          formikMock.values[field] = value;
        }),
        handleSubmit: () => onSubmit(formikMock.values),
        touched: {},
        errors: []
      };

      render(<SignInContainer  formik={formikMock} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
        //screen.debug();

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
          username: 'kalle',
          password: 'password'
        });
      });
    });
  });
});
