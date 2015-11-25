package com.example.controller;

import org.springframework.web.bind.annotation.RestController;

import com.konai.kccs.watcher.lib.common.util.WatcherCode;

@RestController
public class TestController {

	public static void main(String[] args) {

		System.out.println(WatcherCode.PROPERTIES_CHECK_PID_TIMER);
	}
}
