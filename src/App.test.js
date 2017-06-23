import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './components/Head'
import ReviewBody from './components/ReviewBody'
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'


function snapshotTest(element) {
  const tree = renderer.create(element).toJSON()
  expect(tree).toMatchSnapshot()
}

describe(`<App />`, () => {
  it('App renders correctly', () => {
    snapshotTest(<App />)
  })
})

describe(`<Head />`, () => {
  it('Head renders correctly', () => {
    snapshotTest(<Head />)
  })
})

// describe(`<ReviewBody />`, () => {
//   it('ReviewBody renders correctly', (review) => {
//     snapshotTest(<ReviewBody review ={reviewContent}/>)
//   })
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {
  it('renders <App /> component', () => {
  const component = shallow(<App name="app"/>)
  expect(component).toHaveLength(1)   
});
it('it renders props correctly', () =>{
  const component = shallow(<App name="app" />)
  expect(component.instance().props.name).toBe('app')
})
it('it shows Render Loading Reviews on load', () =>{
  const component = mount(<App />)
  expect(component.state().loading).toEqual(true)
})
it('reviewContent starts as an empty array', () =>{
  const component = mount(<App />)
  expect(component.state().reviewContent).toEqual([]) 
})
});

it('snapshot of App Component', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});