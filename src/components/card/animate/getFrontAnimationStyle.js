export const getFrontAnimationStyle = animate => ({
    transform: [
    {
        rotateY: animate.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
        }),
    },
    ],
});
  