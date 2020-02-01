import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
// import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import './index.scss'
import API from '../../service/api'
import withShare from '../../utils/withSare'
import Logins from '../../components/login/index'

// @withShare()
// @pageInit()
class Coupons extends Component {
  config = {
    navigationBarTitleText: '知识树'
    // disableScroll: true
  }

  constructor() {
    super(...arguments)
    this.state = {
      logins: false,
      list: [{
        text: '任务列表',
        url:'../../assets/newIcon/lista.png'
      },{
        text: '课程列表',
        url:'../../assets/newIcon/listb.png'
      },{
        text: '题库',
        url:'../../assets/newIcon/listc.png'
      }]
    }
  }

  componentDidMount() {}

  componentDidShow() {
    // API.get('api/group_list').then(res => {
    //   this.setState({
    //     list: res.data.items
    //   })
    // })
    // var _this = this;
    // // 允许从相机和相册扫码
    // wx.scanCode({
    //   success: (res) => {
    //     var result = res.result;

    //     _this.setData({
    //       result: result,

    //     })
    //   }
    // })
  }

  onTabItemTap(item) {
    Taro.setStorageSync('items', item)
  }

  linkWrap(link) {
    console.warn(link)
    if(link == 0) {
      Taro.navigateTo({
        url:'/pages/taskList/index'
      })
    } else if(link == 1) {
      Taro.navigateTo({
        url:'/pages/courseLists/index'
      })
    } else {
      Taro.navigateTo({
        url:'/pages/questionList/index'
      })
    }
  }

  // 授权成功之后
  onChangeStaus() {
    console.warn(link)
  }

  render() {
    const { list } = this.state
    return (
      <View className='wrap'>
        <Image
          src='../../assets/newIcon/rightTxt.png'
          className='rightTxt'
        />
        <View>
          {
            list.map((item,index) => (
              <View
                className='listWrap'
                key={index}
                onClick={this.linkWrap.bind(this, index)}
              >
                <Image src={item.url} />
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

export default Coupons
