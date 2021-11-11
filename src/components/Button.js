import { useSelector, useDispatch } from "react-redux";
import * as action from "../redux/cartoons/actionCreator";

export function Buttons() {
  const { info } = useSelector((state) => state.cartoonStore);
  const dispatch = useDispatch();
  const prevPage = () => {
    dispatch(action.loadCartoon(info.prev));
  };
  const nextPage = () => {
    dispatch(action.loadCartoon(info.next));
  };

  const prevButton = info.prev ? (
    <button type="button" onClick={prevPage} className="button-page">
      Prev
    </button>
  ) : (
    ""
  );
  const nextButton = info.next ? (
    <button type="button" onClick={nextPage} className="button-page">
      Next
    </button>
  ) : (
    ""
  );

  const buttons = (
    <div className="buttons">
      {prevButton}
      {nextButton}
    </div>
  );
  return buttons;
}
