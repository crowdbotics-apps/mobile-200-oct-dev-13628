import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213407Navigator from '../features/BlankScreen213407/navigator';
import BlankScreen112786Navigator from '../features/BlankScreen112786/navigator';
import BlankScreen012784Navigator from '../features/BlankScreen012784/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213407: { screen: BlankScreen213407Navigator },
BlankScreen112786: { screen: BlankScreen112786Navigator },
BlankScreen012784: { screen: BlankScreen012784Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
