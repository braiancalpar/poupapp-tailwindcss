const formater = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const TransactionItem = ({ item }) => {
  const detailAddicionalClassName =
    item.value >= 0 ? "text-secondary-income" : "text-secondary-expense";
  return (
    <div className="flex justify-between space-y-0">
      <div
        className={`flex flex-col gap-2 text-[15px] leading-[120%] font-medium ${detailAddicionalClassName}`}
      >
        <p className="font-bold">{item.description}</p>
        <p>{formater.format(item.value)}</p>
      </div>
      <div className="text-neutral-text text-sm leading-5">
        {new Date(item.date).toLocaleDateString("pt-Br")}
      </div>
    </div>
  );
};
