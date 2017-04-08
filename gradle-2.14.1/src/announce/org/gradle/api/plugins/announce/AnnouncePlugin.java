/*
 * Copyright 2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.gradle.api.plugins.announce;

import groovy.lang.GroovyObjectSupport;
import org.gradle.api.Plugin;
import org.gradle.api.Project;

/**
 * This plugin allows to send announce messages to Twitter.
 */
public class AnnouncePlugin extends GroovyObjectSupport implements Plugin<Project> {
    public void apply(Project project) {
        project.getExtensions().create("announce", AnnouncePluginExtension.class, project);
    }
}