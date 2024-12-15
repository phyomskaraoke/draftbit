import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const VideoPlayerStyles = theme =>
  StyleSheet.create({ Video: { style: { height: 215 }, props: {} } });

export const YoutubePlayerStyles = theme =>
  StyleSheet.create({
    'Youtube Player': { style: { height: 250 }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });

export const TimerStyles = theme =>
  StyleSheet.create({
    Timer: {
      style: {
        color: theme.colors.text.strong,
        fontSize: 24,
        textAlign: 'left',
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
  });

export const SquareStyles = theme =>
  StyleSheet.create({
    Square: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.branding.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const ModalStyles = theme =>
  StyleSheet.create({
    new: {
      style: {},
      props: { transparent: { minWidth: Breakpoints.Tablet, value: true } },
    },
    'new 2': {
      style: {},
      props: { transparent: { minWidth: Breakpoints.Tablet, value: true } },
    },
    test: {
      style: {},
      props: {
        presentationStyle: {
          minWidth: Breakpoints.Tablet,
          value: 'overFullScreen',
        },
        transparent: { minWidth: Breakpoints.Tablet, value: false },
      },
    },
  });
