//
//  RNTMapView.h
//  AwesomeProject
//
//  Created by hailing on 2018/12/12.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNTMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
