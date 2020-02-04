import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import loginScreen from '../screens/loginScreen'
import TabNavigate from './postsTabsStack'
const screens={
    login:{
        screen: loginScreen,
        navigationOptions:
        {
            title:"Nielsen"
        }
    },
    home:
    {
        screen:TabNavigate, 
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
              headerTitle: routeName
            };
          }     
    }
}
const homeStack=createStackNavigator(screens,
    {
        defaultNavigationOptions:
        {
            headerStyle:{
                backgroundColor:"#34c6eb"
            }
        }
    })
const AppContainer=createAppContainer(homeStack);
export default AppContainer;