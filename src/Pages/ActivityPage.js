//希望可以做到這
import React from 'react';
import {View, Text} from 'react-native';
import {activityPageData as pageData} from '../data.source';

class ActivityPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View>
        <Text> ActivityPage </Text>
      </View>
    );
  }
}

export default ActivityPage;
