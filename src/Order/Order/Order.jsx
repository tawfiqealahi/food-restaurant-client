import orderCoverImg from '../../assets/shop/banner2.jpg'
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import Cover from '../../Pages/Shared/Cover/Cover'
import useMenu from './../../Hooks/useMenu';

const Order = ({title}) => {
  const [menu] = useMenu();
  const desserts = menu.filter(item=>item.category==='dessert');
  const salad = menu.filter(item=>item.category==='salad');
  const soup = menu.filter(item=>item.category==='soup');
  const pizza = menu.filter(item=>item.category==='pizza');
  const offered = menu.filter(item=>item.category==='offered');

    return (
        <div>
            <Cover img={orderCoverImg} title="Order Food"  ></Cover>
            <Tabs>
        <TabList>
          <Tab> SALAD </Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <PanelList>
          <Panel> abble tawli</Panel>
          <Panel>Content</Panel>
        </PanelList>
      </Tabs>
        </div>
    );
};

export default Order;