export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習４：設定ファイル変更</p>
      <button onClick={onClickPractice}>実行</button>
    </div>
  );
};
