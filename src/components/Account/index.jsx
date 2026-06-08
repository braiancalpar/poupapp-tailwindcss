import { IconBank } from "../icons";

const formater = new Intl.NumberFormat("pt-Br", {
  style: "currency",
  currency: "BRL",
});

export const Account = ({ account }) => {
  return (
    <div className="flex justify-between text-neutral-text [&>p]:m-0 [&>p]:text-[15px] [&>p]:leading-[120%]">
      <div>
        <p className="flex gap-2 items-center">
          <IconBank />
          <strong>{account.bank}</strong>
        </p>
      </div>
      <div className="flex flex-col gap-2 w-25">
        <p>
          <strong>Saldo</strong>
        </p>
        <p>{formater.format(account.balance)}</p>
      </div>
    </div>
  );
};
