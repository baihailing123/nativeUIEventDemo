//
//  CLFButton.h
//  AwesomeProject
//
//  Created by hailing on 2019/1/16.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface CLFButton : UIButton
@property(nonatomic,copy)RCTBubblingEventBlock onClick;
@property(nonatomic,copy)NSString *normalTitle;
@property(nonatomic,copy)NSString *selectedTitle;


@end

NS_ASSUME_NONNULL_END
