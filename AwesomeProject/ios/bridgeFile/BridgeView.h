//
//  BridgeView.h
//  AwesomeProject
//
//  Created by hailing on 2019/1/17.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface BridgeView : UIImageView

@property (nonatomic,strong)NSArray *propertyArr;        
@property(nonatomic,strong)RCTBubblingEventBlock onClick;

@end

NS_ASSUME_NONNULL_END
