import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const numbersCollection = new NumberCollection([100, 3, 5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(42);
linkedList.add(-3);
linkedList.add(54);

linkedList.sort()
linkedList.print()