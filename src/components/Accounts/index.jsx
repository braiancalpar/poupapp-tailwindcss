import { Account } from "../Account";
import { Button } from "../Button";
import { IconWallet } from "../icons";
import { List } from "../List";
import { ListItem } from "../ListItem";

export const Accounts = () => {
  const accounts = [
    {
      bank: "Anybank",
      balance: 2200,
    },
    {
      bank: "Bytebank",
      balance: 1800,
    },
    {
      bank: "Switch Bank",
      balance: 4000,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <List>
        {accounts.map((ac) => {
          return (
            <ListItem key={ac.bank}>
              <Account account={ac} />
            </ListItem>
          );
        })}
      </List>
      <div className="grow" />
      <div className="flex justify-center">
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </div>
  );
};
