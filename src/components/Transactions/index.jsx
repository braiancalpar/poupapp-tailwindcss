import { Button } from "../Button";
import { IconCurrency } from "../icons";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { TransactionItem } from "../TransactionItem";

export const Transactions = () => {
    const items = [
    { description: "iFood", value: -70, date: "2024-10-01T00:00:00-03:00" },

    {
      description: "Steam",
      value: -279.90,
      date: "2024-10-03T00:00:00-03:00",
    },

    {
      description: "Freela (2ª parte)",
      value: 1150,
      date: "2024-10-03T00:00:00-03:00",
    },

    {
      description: "Amazon",
      value: -510,
      date: "2024-10-05T00:00:00-03:00",
    },
  ];
    return (
        <>
        <List>
            {items.map((transactionItem, index) => (
                <ListItem key={index}>
                    <TransactionItem item={transactionItem} />
                </ListItem>
            ))}
        </List>
        <div className="flex justify-center">
            <Button>
                <IconCurrency /> Adicionar transação
            </Button>
        </div>
        </>
    )
}