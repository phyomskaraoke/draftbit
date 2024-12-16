import React from 'react';
import { Button, ScreenContainer, Timer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { parameter: null };

const Home2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [popupvideo, setPopupvideo] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }

      timerYmYzmzLTRef.current?.start();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  React.useEffect(() => {
    try {
      if (isFocused) {
        return;
      }

      timerYmYzmzLTRef.current?.reset(undefined);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const timerYmYzmzLTRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        {
          alignItems: { minWidth: Breakpoints.Tablet, value: 'center' },
          justifyContent: {
            minWidth: Breakpoints.Tablet,
            value: 'space-around',
          },
        },
        dimensions.width
      )}
    >
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            color: {
              minWidth: Breakpoints.Tablet,
              value: palettes.Brand['Strong Inverse'],
            },
            fontFamily: {
              minWidth: Breakpoints.Tablet,
              value: 'Agbalumo_400Regular',
            },
            fontSize: { minWidth: Breakpoints.Tablet, value: 30 },
          }),
          dimensions.width
        )}
      >
        {'SELECT A SONG TO SING'}
      </Text>
      {/* Dont Stop Me Now */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('DontStopMeNowScreen');

            timerYmYzmzLTRef.current?.reset(undefined);
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            marginLeft: { minWidth: Breakpoints.Tablet, value: '' },
            position: { minWidth: Breakpoints.Tablet, value: 'relative' },
            width: { minWidth: Breakpoints.Tablet, value: 300 },
            zIndex: { minWidth: Breakpoints.Tablet, value: 10 },
          }),
          dimensions.width
        )}
        title={"Don't Stop Me Now"}
      />
      {/* PPC button */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('PinkPonyClubScreen');

            timerYmYzmzLTRef.current?.reset(undefined);
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            marginLeft: { minWidth: Breakpoints.Tablet, value: '' },
            position: { minWidth: Breakpoints.Tablet, value: 'relative' },
            width: { minWidth: Breakpoints.Tablet, value: 300 },
            zIndex: { minWidth: Breakpoints.Tablet, value: 50 },
          }),
          dimensions.width
        )}
        title={'Pink Pony Club'}
      />
      <Timer
        countDirection={'up'}
        format={'mm:ss'}
        initialTime={0}
        onTimerEnd={() => {
          try {
            navigation.navigate('IdleScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        {...GlobalStyles.TimerStyles(theme)['Timer'].props}
        ref={timerYmYzmzLTRef}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TimerStyles(theme)['Timer'].style, {
            alignSelf: { minWidth: Breakpoints.Tablet, value: 'center' },
            color: {
              minWidth: Breakpoints.Tablet,
              value: theme.colors.background.brand,
            },
          }),
          dimensions.width
        )}
        timerEndTime={4000}
        updateInterval={4000}
      />
    </ScreenContainer>
  );
};

export default withTheme(Home2Screen);
