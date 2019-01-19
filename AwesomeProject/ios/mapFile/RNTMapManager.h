//
//  RNTMapManager.h
//  AwesomeProject
//
//  Created by hailing on 2018/12/12.
//  Copyright © 2018年 Facebook. All rights reserved.
//
#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>
#import "RNTMapView.h"

NS_ASSUME_NONNULL_BEGIN

@interface RNTMapManager : RCTViewManager <MKMapViewDelegate>

@end

NS_ASSUME_NONNULL_END
