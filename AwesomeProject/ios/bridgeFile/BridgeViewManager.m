//
//  BridgeViewManager.m
//  AwesomeProject
//
//  Created by hailing on 2019/1/17.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "BridgeViewManager.h"
#import "BridgeView.h"


@implementation BridgeViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(propertyArr,NSArray)
RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)


- (UIView *)view {
  return [[BridgeView alloc]init];
}

@end
