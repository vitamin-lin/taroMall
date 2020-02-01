import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import './index.scss'
import API from '../../service/api'
import withShare from '../../utils/withSare'
import pageInit from '../../utils/pageInit'
import User from '../user/index'
import Knowledge from '../knowledge/index'
import { getCurrentMonthFirst, dateLater } from '../../utils/times'

@pageInit()
@withShare()

class HOME extends Component {
  config = {
    navigationBarTitleText: 'MARS MAKER',
    // disableScroll: true
    navigationStyle: "custom" 
  }

  constructor() {
    super(...arguments)
    this.state = {
      stau: true,
    }
  }

  componentDidMount() {
    // API.get('api/member').then(res => {
    //   if (res.code == 20000) {
    //   }
    // })

    // myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    var myDate = new Date();//获取系统当前时间
    let days = getCurrentMonthFirst(); // 2020-01-03

    console.warn(dateLater(days, 0),'1234')
    
  }

  componentDidShow() {
  }

  componentDidMount () {
    this.setNavSize()
  }

  setNavSize () {
    let sysinfo = Taro.getSystemInfoSync()
    let statusHeight = sysinfo.statusBarHeight
    let isiOS = sysinfo.system.indexOf('iOS') > -1
    let navHeight
    if (!isiOS) {
      navHeight = 48;
    } else {
      navHeight = 44;
    }
    this.setState({
      status: statusHeight,
      navHeight: navHeight
    })
  }

  takePhoto() {
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
      }
    })
  }

  leftTabs(staus) {
    this.setState({
      stau: true
    })
  }

  rightTabs(staus) {
    this.setState({
      stau: false
    })
  }

  render() {
    const { current, stau, staus } = this.state
    const style = {
      paddingTop: Taro.$navBarMarginTop + 'px'
     }
    return (
      <View className='wrap'>
        <View className="nav-box">
          <View className='nav' style={style}></View>
          <View className='nav-title'>
            <Image src='../../assets/newIcon/tit.png' />
          </View>
        </View>
        {
          !stau ? <User/> : <Knowledge/>
        }
        <View className='botms'>
          <View className='left' onClick={this.leftTabs.bind(this, staus)}>
            <View className='main'>
              <Image src={stau ? '../../assets/newIcon/know.png' : '../../assets/newIcon/knows.png'} />
              <View>知识库</View>
            </View>
          </View>
          <View className='center' onClick={this.takePhoto}>
            <Image src='../../assets/newIcon/ervm.png' />
          </View>
          <View className='right' onClick={this.rightTabs.bind(this, staus)}>
            <View className='main'>
              <Image src={stau ? '../../assets/newIcon/userActive.png' : '../../assets/newIcon/user.png'} />
              <View>个人中心</View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

export default HOME