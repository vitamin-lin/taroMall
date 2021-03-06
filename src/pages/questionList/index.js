import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
// import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import './index.scss'
import API from '../../service/api'
import withShare from '../../utils/withSare'
import Logins from '../../components/login/index'

@withShare()
// @pageInit()
class Coupons extends Component {
  config = {
    navigationBarTitleText: '题库'
    // disableScroll: true
  }

  constructor() {
    super(...arguments)
    this.state = {
      list: [{
        tit:'基础',
        detail:'适合年龄3-8岁',
        url:'https://mm-resource.oss-cn-beijing.aliyuncs.com/miniAppResource/pic_a.png'
      },{
        tit:'高阶',
        detail:'适合年龄8-12岁',
        url:'https://mm-resource.oss-cn-beijing.aliyuncs.com/miniAppResource/pic_b.png'
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

  linkTo(index) {
    if(index == 0) {
      Taro.navigateTo({
        url:'/pages/tabLink/index?leveId=1'
      })
    } else {
      Taro.navigateTo({
        url:'/pages/tabLink/index?leveId=2'
      })
    }
  }

  render() {
    const { list } = this.state
    return (
      <View className='wrapBox'>
        {
          list.map((e, index) => (
            <View className='boxa' onClick={this.linkTo.bind(this, index)}>
              <Image src={e.url} />
            </View>
          ))
        }
      </View>
    )
  }
}

export default Coupons
