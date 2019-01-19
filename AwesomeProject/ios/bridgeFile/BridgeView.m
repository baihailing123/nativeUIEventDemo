//
//  BridgeView.m
//  AwesomeProject
//
//  Created by hailing on 2019/1/17.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "BridgeView.h"

@implementation BridgeView

- (id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    UITapGestureRecognizer *gesture = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(doClick)];
    [self addGestureRecognizer:gesture];
  }
  
  return self;
}

- (void)doClick
{
  if(self.onClick)
  {
    self.onClick(@{@"message":@"我是Native传过来的值"});
  }
}

- (void)setPropertyArr:(NSArray *)propertyArr {
  _propertyArr = propertyArr;
  
  if (propertyArr.count == 2) {
    if ([propertyArr.firstObject isEqualToString:@"one"] && [propertyArr.lastObject isEqualToString:@"nomal"]) {
      UIImage *image = [UIImage imageNamed:@"one"];
      self.image = image;
      
    } else {  //第二张图片旋转90度
      self.image = [UIImage imageNamed:@"two"];
      self.transform = CGAffineTransformMakeRotation(M_PI*90/180);
    }
  }

}


@end
