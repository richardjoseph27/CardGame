export const getBackAnimationStyle = animate => ({
    transform: [
    {
        rotateY: animate.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
        }),
    },
    ],
});
