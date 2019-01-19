//
//  CLFButtonManager.m
//  AwesomeProject
//
//  Created by hailing on 2019/1/16.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "CLFButtonManager.h"
#import "React/RCTBridge.h"
#import "CLFButton.h"


@implementation CLFButtonManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(normalTitle,NSString)
RCT_EXPORT_VIEW_PROPERTY(selectedTitle,NSString)

- (UIView *)view {
  
  return [CLFButton buttonWithType: UIButtonTypeCustom];

}

@end
