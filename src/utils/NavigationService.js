import { CommonActions } from '@react-navigation/native';
import { RouteParams, RouteParam } from '@stores/NavigationStore';
let _navigator, _navStore;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function setNavigationStore(navigationStore) {
  _navStore = navigationStore;
}

function generateUid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return '-' + s4() + s4() + '-' + s4() + '-' + s4();
}

function navigate(routeName, { params, key }) {
  const routeParams = RouteParams.create({ routeKey: key, params });
  _navStore.setParamsForRoute(routeParams);
  _navigator.dispatch(
    CommonActions.navigate({
      routeName,
      key,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  setNavigationStore,
  generateUid,
};
