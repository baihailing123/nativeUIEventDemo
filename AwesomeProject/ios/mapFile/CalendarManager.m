//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by hailing on 2018/12/11.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@implementation CalendarManager

RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSDate *time = [RCTConvert NSDate:details[@"time"]];
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback) {
  NSArray *events = @[@"1",@"2"];
  callback(@[[NSNull null],events]);
}

- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}

/*Module CalendarManager requires main queue setup since it overrides'constantsToExport' but doesn't implement 'requiresMainQueueSetup'.in a future release React Native will default to initializing all native modules on a background thread unless explicitly*/
+ (BOOL)requiresMainQueueSetup {
  return YES;
}


@end
