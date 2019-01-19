//
//  RCTConvert+Mapkit.h
//  AwesomeProject
//
//  Created by hailing on 2018/12/12.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <React/RCTConvert.h>

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end

NS_ASSUME_NONNULL_END
