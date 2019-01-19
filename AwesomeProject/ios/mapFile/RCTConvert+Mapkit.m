//
//  RCTConvert+Mapkit.m
//  AwesomeProject
//
//  Created by hailing on 2018/12/12.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RCTConvert+Mapkit.h"

@implementation RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json
{
  json = [self NSDictionary:json];
  return (MKCoordinateSpan){
    [self CLLocationDegrees:json[@"latitudeDelta"]],
    [self CLLocationDegrees:json[@"longitudeDelta"]]
  };
}

+ (MKCoordinateRegion)MKCoordinateRegion:(id)json
{
  return (MKCoordinateRegion){
    [self CLLocationCoordinate2D:json],
    [self MKCoordinateSpan:json]
  };
}

@end
