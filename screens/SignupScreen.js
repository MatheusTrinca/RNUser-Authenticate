import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import auth from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useAuthContext } from '../contexts/AuthContext';

function SignupScreen() {
  const [loading, setLoading] = useState(false);

  const { authenticate } = useAuthContext();

  async function signUpHandler({ email, password }) {
    try {
      setLoading(true);
      const token = await auth.createUser(email, password);
      authenticate(token);
    } catch (e) {
      Alert.alert('Authentication Failed!', 'Please try again later');
      setLoading(false);
    }
  }

  if (loading) return <LoadingOverlay message="Creating your User...." />;

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
