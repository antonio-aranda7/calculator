//import PropTypes from 'prop-types';
import '../App.css';

export default function Display(props) {
  const { status } = props;
  return (
    <div className="display" id="display">
          <span className="hint">
            {status.total}
            {status.operation}
            {status.next}
          </span>
          <span className="total">
            {status.next ?? status.total ?? 0}
          </span>
    </div>
  );
}

/*Display.propTypes = {
  status: PropTypes.string,
};

Display.defaultProps = {
  status: '0',
};
*/
