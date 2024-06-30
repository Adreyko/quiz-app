import Button from '../../shared/ui/Button/Button';
import { getRouteQuestion } from '../../providers/Router/conts/routers';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className='flex items-center justify-center'>
      <Link to={getRouteQuestion('1')}>
        <Button variant='secondary' size='large'>
          Start
        </Button>
      </Link>
    </div>
  );
}

export default Start;
