interface Props {
  maxValue: string;
  minValue: string;
}

export const RangeBarSubtitle = ({ maxValue, minValue }: Props) => {
  return (
    <div className='d-flex justify-content-between text-muted small'>
      <span>{minValue}</span>
      <span>{maxValue}</span>
    </div>
  );
};
