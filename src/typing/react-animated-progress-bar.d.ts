declare module 'react-animated-progress-bar' {
  interface ProgressBarProps {
    width: string;
    height: string;
    fontColor: string;
    percentage: number;
    trackPathColor: string;
    defColor: {
      fair: string;
      good: string;
      excellent: string;
      poor: string;
    };
    rect?: boolean;
    rectPadding?: string;
    scrollArea?: any;
    trackWidth?: string;
    rectBorderRadius?: string;
    trackBorderColor?: string;
    hollowBackgroundColor?: string;
  }
  declare const ProgressBar: React.FC<ProgressBarProps>;
  export default ProgressBar;
}
