//import PropTypes from 'prop-types';
import CalcButton from './buttons';
import '../App.css';

export default function ButtonPanel(props) {
  const { grantParentHandleState } = props;
  return (
    <>
      <div className="button-grid">
          <CalcButton myFunc={grantParentHandleState} buttonName="AC" buttonClasses="btn clear" id="clear" />
          <CalcButton myFunc={grantParentHandleState} buttonName="+/-" buttonClasses="btn plusMinus" id="plus-minus" />
          <CalcButton myFunc={grantParentHandleState} buttonName="%" buttonClasses="btn modulo" id="modulo" />
          <CalcButton myFunc={grantParentHandleState} buttonName="÷" buttonClasses="btn divide orange" id="divide" />
          <CalcButton myFunc={grantParentHandleState} buttonName="7" buttonClasses="btn seven" id="seven" />
          <CalcButton myFunc={grantParentHandleState} buttonName="8" buttonClasses="btn eight" id="eight" />
          <CalcButton myFunc={grantParentHandleState} buttonName="9" buttonClasses="btn nine" id="nine" />
          <CalcButton myFunc={grantParentHandleState} buttonName="x" buttonClasses="btn multiply orange" id="multiply" />
          <CalcButton myFunc={grantParentHandleState} buttonName="4" buttonClasses="btn four" id="four" />
          <CalcButton myFunc={grantParentHandleState} buttonName="5" buttonClasses="btn five" id="five" />
          <CalcButton myFunc={grantParentHandleState} buttonName="6" buttonClasses="btn six" id="six" />
          <CalcButton myFunc={grantParentHandleState} buttonName="-" buttonClasses="btn subtract orange" id="subtract" />
          <CalcButton myFunc={grantParentHandleState} buttonName="1" buttonClasses="btn one" id="one" />
          <CalcButton myFunc={grantParentHandleState} buttonName="2" buttonClasses="btn two" id="two" />
          <CalcButton myFunc={grantParentHandleState} buttonName="3" buttonClasses="btn three" id="three" />
          <CalcButton myFunc={grantParentHandleState} buttonName="+" buttonClasses="btn plus orange" id="add" />
        </div>
        <div className="bottom-container">
          <CalcButton myFunc={grantParentHandleState} buttonName="0" buttonClasses="btn zero" id="zero" />
          <CalcButton myFunc={grantParentHandleState} buttonName="." buttonClasses="btn decimal" id="decimal" />
          <CalcButton myFunc={grantParentHandleState} buttonName="=" buttonClasses="btn equals orange" id="equals" />
        </div>
    </>
  );
}

/*ButtonPanel.propTypes = {
  grantParentHandleState: PropTypes.func,
};

ButtonPanel.defaultProps = {
  grantParentHandleState: '0',
};*/
