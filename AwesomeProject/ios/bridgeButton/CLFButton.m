//
//  CLFButton.m
//  AwesomeProject
//
//  Created by hailing on 2019/1/16.
//  Copyright © 2019年 Facebook. All rights reserved.
//

#import "CLFButton.h"

@implementation CLFButton

- (id)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
  [self addTarget:self action:@selector(btnSelected) forControlEvents:UIControlEventTouchUpInside];

  }
  return self;
}

- (void)setFrame:(CGRect)frame {
  
}

- (void)setNormalTitle:(NSString *)normalTitle {
  
  _normalTitle = normalTitle;
    [self setTitle:self.normalTitle forState: UIControlStateNormal];
}

-(void)setSelectedTitle:(NSString *)selectedTitle {
  
  _selectedTitle = selectedTitle;
  [self setTitle:self.selectedTitle forState: UIControlStateSelected];
}

- (void)btnSelected {

  self.selected = !self.selected;
  if (!self.onClick){
    
    return;
    
  }
  
  NSLog(@"现在的标题是:%@",self.titleLabel.text);
  self.onClick(@{@"msg": @"我是测试信息", @"isSelected": @(self.isSelected)});
}






@end
