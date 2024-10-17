import Fontisto from '@expo/vector-icons/Fontisto';
import { StyleSheet, Platform } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'orange', dark: '#353636' }}
      headerImage={<Fontisto size={310} name="coffeescript" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Coffee Shop</ThemedText>
      </ThemedView>

      <ThemedText>
        <ThemedText>555 Coffee Lane</ThemedText>{'\n'}
        <ThemedText>Kansas City, KS 55555-1234</ThemedText>
      </ThemedText>

      <ThemedText>
        Phone:{'\n'}
        <ExternalLink href="tel:5555555555">555-555-5555</ExternalLink>{'\n'}
        or{' '}<ExternalLink href="sms:5555555555">Click Here to Text!</ExternalLink>
      </ThemedText>

      <ThemedText>
        Hours:{'\n'}
        <ThemedText>Open 6am to 4pm daily.</ThemedText>
      </ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: 'papayawhip',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
