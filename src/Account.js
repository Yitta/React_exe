import React from 'react';
import dm from './user.png'
import {
    Flex,
    FlexItem
} from 'react-weui';
import 'weui';
import UserPanel from './UserPanel';

const AccountPanel = (props) => (
    <UserPanel>
	            <div style={{margin: '50px auto'}}>
		            <img src="https://wx.qlogo.cn/mmopen/vHmCr3U9N0MQoXavibdqGibCT93T5ODhPoWWtjY0NRI1vXnAm1ZRa2cYB80f0duLrgxEiaUjNLAty0tCgmLaqCXWtmAoEXEcMl3/0"
				        style={{
						    width: '80px',
						    height: 'auto',
						    borderRadius: '50%',
						    
						}}
		            />
		            <p>Username</p>
	            </div>
	    
    </UserPanel>       
);

export default AccountPanel;