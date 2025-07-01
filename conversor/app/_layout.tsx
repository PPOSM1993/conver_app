import { Stack } from 'expo-router';

//stack es pilas

export default function Layout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(1-conversor)" options={{headerShown:false}} />
    </Stack>
    </>
  )
}