// subject 생성함수
const createSubject = () => {
  let state = {};
  const observers = [];
  const addObserver = (observer) => {
    observers.push(observer);
  };
  const notifyObservers = () => {
    observers.forEach((observer) => observer(state));
  };
  const getState = () => {
    state;
  };
  const setState = (newState) => {
    state = newState;
    notifyObservers();
  };
  return {
    getState,
    setState,
    addObserver,
  };
};

const createObserver = (name) => {
  const handleStateChange = (newState) => {
    console.log(`Observer ${name} - 상태변경:`, newState);
  };
  return handleStateChange;
};

const subject = createSubject();

const observer1 = createObserver("Observer 1");
const observer2 = createObserver("Observer 2");
subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState({count: 1});
subject.setState({count: 2});
