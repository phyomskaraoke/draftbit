import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import DontStopMeNowScreen from './screens/DontStopMeNowScreen';
import Home2Screen from './screens/Home2Screen';
import HomeScreen from './screens/HomeScreen';
import IdleScreen from './screens/IdleScreen';
import PinkPonyClubScreen from './screens/PinkPonyClubScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FFFFFF',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="Home2Screen"
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerStyle: {
            backgroundColor: theme.colors.background.brand,
            borderBottomColor: 'transparent',
          },
          headerTintColor: palettes.Brand.Surface,
        })}
      >
        <Stack.Screen
          name="DontStopMeNowScreen"
          component={DontStopMeNowScreen}
          options={({ navigation }) => ({
            headerLeft: ({ tintColor, canGoBack }) =>
              canGoBack ? null : (
                <Touchable
                  style={[styles.headerContainer, styles.headerContainerLeft]}
                  onPress={() => {
                    try {
                      /* 'Navigate' action requires configuration: choose a navigation destination */
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon
                    name="AntDesign/caretleft"
                    size={Platform.OS === 'ios' ? 21 : 24}
                    color={palettes.Brand['Strong Inverse']}
                    style={[styles.headerIcon, styles.headerIconLeft]}
                  />
                  <View style={styles.headerLabelWrapper}>
                    <Text
                      style={[
                        styles.headerLabel,
                        { color: palettes.Brand['Strong Inverse'] },
                      ]}
                    >
                      Back
                    </Text>
                  </View>
                </Touchable>
              ),
            headerShown: false,
            headerTintColor: palettes.Brand['Strong Inverse'],
            title: "Don't Stop Me Now",
          })}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home',
          })}
        />
        <Stack.Screen
          name="PinkPonyClubScreen"
          component={PinkPonyClubScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Pink Pony Club',
          })}
        />
        <Stack.Screen
          name="Home2Screen"
          component={Home2Screen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Home 2',
          })}
        />
        <Stack.Screen
          name="IdleScreen"
          component={IdleScreen}
          options={({ navigation }) => ({
            title: 'Idle screen',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
  headerLabel: { fontSize: 17, letterSpacing: 0.35 },
  headerLabelWrapper: { flexDirection: 'row', alignItems: 'flex-start' },
});
