import Categories from '../categories/Categories';
import './Sherbimet.css';

function Sherbimet() {
  return (
    <div className="row">
          <div className="col-2">
            <Categories />
          </div> 
          <div className="col-10">
            <div></div>
          </div> 
        </div>
  );
}

export default Sherbimet;
