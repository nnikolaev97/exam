import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { HasAtTheSquareACardOf } from "./HasAtTheSquareACardOf";
import { HasAtTheSquareNCards } from "./HasAtTheSquareNCards";
import { HasAtTheSquareNoCards } from "./HasAtTheSquareNoCards";
import { HasInHisHandACardOf } from "./HasInHisHandACardOf";
import { HasInHisHandCards } from "./HasInHisHandCards";
import { HasInHisHandCardsOf } from "./HasInHisHandCardsOf";
import { HasInHisHandNoCards } from "./HasInHisHandNoCards";
import { HasInHisHandNoCardsOf } from "./HasInHisHandNoCardsOf";
import { HasNoSquare } from "./HasNoSquare";
import { HasSquare } from "./HasSquare";
import { TheCurrentPlayerIs } from "./TheCurrentPlayerIs";
import { TheCurrentRoundIs } from "./TheCurrentRoundIs";

export default function configureTestStepsBoardInjector(injector: Injector) {
  injector.register(PostLineStep, HasAtTheSquareACardOf);
  injector.register(PostLineStep, HasAtTheSquareNCards);
  injector.register(PostLineStep, HasAtTheSquareNoCards);
  injector.register(PostLineStep, HasInHisHandACardOf);
  injector.register(PostLineStep, HasInHisHandCards);
  injector.register(PostLineStep, HasInHisHandCardsOf);
  injector.register(PostLineStep, HasInHisHandNoCards);
  injector.register(PostLineStep, HasInHisHandNoCardsOf);
  injector.register(PostLineStep, HasNoSquare);
  injector.register(PostLineStep, HasSquare);
  injector.register(PostLineStep, TheCurrentPlayerIs);
  injector.register(PostLineStep, TheCurrentRoundIs);
}
